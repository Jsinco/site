package main

import (
	"fmt"
	"log"
	"net/http"
)

type hijack404 struct {
	http.ResponseWriter
	R         *http.Request
	Handle404 func(w http.ResponseWriter, r *http.Request) bool
}

func (h *hijack404) WriteHeader(code int) {
	if 404 == code && h.Handle404(h.ResponseWriter, h.R) {
		panic(h)
	}

	h.ResponseWriter.WriteHeader(code)
}

func Handle404(handler http.Handler, handle404 func(w http.ResponseWriter, r *http.Request) bool) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		hijack := &hijack404{ResponseWriter: w, R: r, Handle404: handle404}

		defer func() {
			if p := recover(); p != nil {
				if p == hijack {
					return
				}
				panic(p)
			}
		}()

		handler.ServeHTTP(hijack, r)
	})
}

func fire404(w http.ResponseWriter, r *http.Request) bool {
	http.ServeFile(w, r, "404.html")

	return true
}

func main() {
	handlerStatics := http.StripPrefix("/", http.FileServer(http.Dir("./")))

	var vBlessedHandlerStatics = Handle404(handlerStatics, fire404)

	http.Handle("/", vBlessedHandlerStatics)

	// add other handlers using http.Handle() as necessary
	fmt.Println("Server listening on port 3333")
	if err := http.ListenAndServe(":3333", nil); err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
