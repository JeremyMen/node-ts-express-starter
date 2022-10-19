import merge from "lodash.merge"

process.env.NODE_ENV = process.env.NODE_ENV || "development"
const stage = process.env.STAGE || "local"
const port = process.env.PORT || 3000

let envConfig

if (stage === "production") {
  envConfig = require("./prod").default
} else if (stage === "staging") {
  envConfig = require("./staging").default
} else {
  envConfig = require("./local").default
}

const defaultConfig = {
  stage,
  port,
  logging: false,
}

export default merge(defaultConfig, envConfig)
