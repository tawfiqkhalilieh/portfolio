
// Declare scss modules
declare module '*.scss' {
    const classes: {[key: string]: string}
    export default classes
  }
  
  // Declare png modules
  declare module '*.png' {
    const value: string
    export default value
  }