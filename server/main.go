package main

import (
	"fmt"
	"net/http"
)

func errorHandler(status int) bool {
	if status == http.StatusNotFound {
		return true
	}
	return false
}

func main() {
	// Define the directory containing static files
	staticDir := http.Dir("./")

	// Create a file server handler for the static directory
	fileServer := http.FileServer(staticDir)
	fileServerr := http.FileServer(http.Dir("./images"))

	// Handle all requests using the file server
	http.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// This handler serves all requests from the static directory
		fileServer.ServeHTTP(w, r)
		fileServerr.ServeHTTP(w, r)
		if errorHandler(http.StatusNotFound) {
			http.ServeFile(w, r, "404.html")
			return
		}
	}))

	// Start the server
	fmt.Println("Server listening on port 3333")
	err := http.ListenAndServe(":3333", nil)
	if err != nil {
		return
	}
}
