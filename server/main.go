package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Define the directory containing static files
	staticDir := http.Dir("./")

	// Create a file server handler for the static directory
	fileServer := http.FileServer(staticDir)

	// Handle all requests using the file server
	http.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// This handler serves all requests from the static directory
		fileServer.ServeHTTP(w, r)
	}))

	// Start the server
	fmt.Println("Server listening on port 3333")
	err := http.ListenAndServe(":3333", nil)
	if err != nil {
		return
	}
}
