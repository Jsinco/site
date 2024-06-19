package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func main() {
	// Define directory for static files
	staticDir := http.Dir("./")
	images := http.Dir("./images")

	// Create file server handlers
	fileServer := http.FileServer(staticDir)
	imageServer := http.FileServer(images)

	// Handler function for all requests
	http.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Try serving files from specific folders first
		var err error
		fileServer.ServeHTTP(w, r)
		imageServer.ServeHTTP(w, r)

		// Check for errors or 404 (Not Found)
		if err != nil {
			if os.IsNotExist(err) {
				serveNotFound(w, r)
				return
			}
			// Handle other errors (optional)
			log.Println("Error serving file:", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		}
	}))

	// Start the server
	fmt.Println("Server listening on port 3333")
	err := http.ListenAndServe(":3333", nil)
	if err != nil {
		log.Fatal(err)
	}
}

// Helper function to check URL path prefix
func hasPrefix(path string, prefix string) bool {
	return len(path) >= len(prefix) && path[:len(prefix)] == prefix
}

// Serve custom 404 page (assuming 404.html is in the same directory)
func serveNotFound(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadFile("404.html")
	if err != nil {
		log.Println("Error reading 404.html:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNotFound)
	w.Write(data)
}
