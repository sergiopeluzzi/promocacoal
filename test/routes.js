const assert = require("assert")
const http = require("http")
require("dotenv").config()

const shouldBeOk = (method, path, done) => {
    http.request({
        host: process.env.HOST,
        port: process.env.PORT,
        method,
        path,
    }, 
    response => {
        assert.equal(200, response.statusCode)
        done()
    },
    ).end()
}

const shouldHaveMessage = (method, path, message, done, ) => { 
        http.request({
            host: process.env.HOST,
            port: process.env.PORT,
            method,
            path,
        }, 
        response => {
            let data = ""
            response.on("data", chunk => {
                data += chunk
            })
            response.on("end", () => {
                assert.equal(message, data)
                done()
            })
        },
    )
    .end()
}

describe("GET /login", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("GET", "/login", done)
    })
    
    it("should have the correct message", done => {
        shouldHaveMessage("GET", "/login", "GET /login", done,)
    })
})

describe("POST /login", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("POST", "/login", done)
    })
    
    it("should have the correct message", done => {
        shouldHaveMessage("POST", "/login", "POST /login", done,)
    })
})

describe("GET /register", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("GET", "/register", done)
    })
    
    it("should have the correct message", done => {
        shouldHaveMessage("GET", "/register", "GET /register", done,)
    })
})

describe("POST /register", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("POST", "/register", done)
    })
    
    it("should have the correct message", done => {
        shouldHaveMessage("POST", "/register", "POST /register", done,)
    })
})

describe("GET /forgot-password", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("GET", "/forgot-password", done)
    })
    
    it("should have the correct message", done => {
        shouldHaveMessage("GET", "/forgot-password", "GET /forgot-password", done,)
    })
})

describe("POST /forgot-password", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("POST", "/forgot-password", done)
    })
    
    it("should have the correct message", done => {
        shouldHaveMessage("POST", "/forgot-password", "POST /forgot-password", done,)
    })
})

describe("PUT /logout", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("PUT", "/logout", done)
    })
    
    it("should have the correct message", done => {
        shouldHaveMessage("PUT", "/logout", "PUT /logout", done,)
    })
})

describe("GET /reset-password", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("GET", "/reset-password/token123", done,)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("GET", "/reset-password/token123", "GET /reset-password token123", done,)
    })
})
  
describe("POST /reset-password", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("POST", "/reset-password/token123", done,)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("POST", "/reset-password/token123", "POST /reset-password token123", done,)
    })
})

describe("GET /:customer", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("GET", "/sergiopeluzzi", done)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("GET", "/sergiopeluzzi", "GET /:customer sergiopeluzzi", done,)
    })
})

describe("PUT /:customer", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("PUT", "/sergiopeluzzi", done)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("PUT", "/sergiopeluzzi", "PUT /:customer sergiopeluzzi", done,)
    })
})

describe("DELETE /:customer", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("DELETE", "/sergiopeluzzi", done)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("DELETE", "/sergiopeluzzi", "DELETE /:customer sergiopeluzzi", done,)
    })
})

describe("GET /:customer/products", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("GET", "/sergiopeluzzi/products", done)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("GET", "/sergiopeluzzi/products", "GET /:customer/products sergiopeluzzi products", done,)
    })
})

describe("POST /:customer/products", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("POST", "/sergiopeluzzi/products", done)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("POST", "/sergiopeluzzi/products", "POST /:customer/products sergiopeluzzi products", done,)
    })
})

describe("GET /:customer/:product", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("GET", "/sergiopeluzzi/teddy", done)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("GET", "/sergiopeluzzi/teddy", "GET /:customer/:product sergiopeluzzi teddy", done,)
    })
})

describe("PUT /:customer/:product", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("PUT", "/sergiopeluzzi/teddy", done)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("PUT", "/sergiopeluzzi/teddy", "PUT /:customer/:product sergiopeluzzi teddy", done,)
    })
})

describe("DELETE /:customer/:product", () => {
    it("should have the correct status (200)", done => {
        shouldBeOk("DELETE", "/sergiopeluzzi/teddy", done,)
    })

    it("should have the correct message", done => {
        shouldHaveMessage("DELETE", "/sergiopeluzzi/teddy", "DELETE /:customer/:product sergiopeluzzi teddy", done,)
    })
})