package main

import (
	"fmt"
	"net/http"
	"os"
)

var port = ":3333"

func main() {
	// Define the directory containing static files

	directory := "./"

	// Create a file server handler for the static directory
	fileServer := http.FileServer(http.Dir(directory))
	images := http.FileServer(http.Dir("./images"))

	// Handle all requests using the file server
	http.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Request from: " + r.RemoteAddr)

		// check if path will return a file
		stat, _ := os.Stat("." + r.URL.Path)

		if stat == nil && r.URL.Path != "/" {
			http.ServeFile(w, r, "404.html")
			return
		}

		fileServer.ServeHTTP(w, r)
		images.ServeHTTP(w, r)
	}))

	// Start the server
	fmt.Println("Server listening on port", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		return
	}
}
