# API Documentation

This project provides three endpoints for text summarization, sentiment analysis, and image recognition using the [@xenova/transformers](https://www.npmjs.com/package/@xenova/transformers) package in an Express.js server.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [POST /api/sentimental](#1-post-apisentimental)
  - [POST /api/summarize](#2-post-apisummarize)
  - [POST /api/image-recognition](#3-post-apiimage-recognition)
- [Error Responses](#error-responses)
- [Running the Server](#running-the-server)

---

## Getting Started

To get started with this API, ensure you have the necessary dependencies installed and your server running.

### Installation
bash npm install express @xenova/transformers

## Api Endpoints

### 1. POST /api/sentimental

This endpoint performs sentiment analysis on the provided text.

**Request**

- **Method:** POST
- **Content-Type:** application/json
- **Request Body:**
```json
{ "text": "Your input text here" }
```

**Response**

- **Status Code:** 200 OK
- **Content-Type:** application/json
- **Response Body:**
```json
{ "data": [ { "label": "POSITIVE", "score": 0.99 } ] }
```

**Example**
```bash
curl -X POST http://localhost:3000/api/sentimental \ -H "Content-Type: application/json" \ -d '{"text": "I love this product!"}'
```

### 2. POST /api/summarize

This endpoint performs text summarization on the provided text.

**Request**

- **Method:** POST
- **Content-Type:** application/json
- **Request Body:**
```json
{ "text": "Your long input text here" }
```
**Response**

- **Status Code:** 200 OK
- **Content-Type:** application/json
- **Response Body:**
```json
{ "data": [ { "summary_text": "Shortened summary of the input text." } ] }
```
**Example**
```bash
curl -X POST http://localhost:3000/api/summarize \ -H "Content-Type: application/json" \ -d '{"text": "This is a long article or paragraph to be summarized."}'
```
### 3. POST /api/image-recognition

This endpoint performs image classification on the provided image input (base64 encoded).

**Request**

- **Method:** POST
- **Content-Type:** application/json
- **Request Body:**
```json
{ "image": "Base64 encoded image data here" }
```
**Response**

- **Status Code:** 200 OK
- **Content-Type:** application/json
- **Response Body:**
```json
{ "data": [ { "label": "dog", "score": 0.98 }, { "label": "cat", "score": 0.02 } ] }
```

**Example**
```bash
 curl -X POST http://localhost:3000/api/image-recognition \ -H "Content-Type: application/json" \ -d '{"image": "base64imagestring_here"}'
```

## Error Responses

In case of invalid requests or errors, the API will return:

- **Status Code:** 400 Bad Request
- **Content-Type:** application/json

**Example Error Response**
```json
{ "error": "Invalid input" }
```
## Running the Server

To start the server, ensure the dependencies are installed and run:
```bash
node server.js
```
The server will listen on port 3000. You can access the API at `http://localhost:3000`.