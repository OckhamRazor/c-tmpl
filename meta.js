module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "label": "Author"
    },
    "sass": {
      "type": "confirm",
      "message": "Use sass?",
      "default": false
    },
    "element-ui": {
      "type": "confirm",
      "message": "Use element-ui?",
      "default": false
    }
  },
  "helpers": {
    "lowercase": str => str.toLowerCase()
  },
  "completeMessage": "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev.{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev.{{/inPlace}}"
}
