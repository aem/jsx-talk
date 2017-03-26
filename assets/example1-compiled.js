/* @jsx console.log */

const getContent = () => {
  return console.log(null, { arg1: true })
}

getContent()

/**
 * OUTPUT:

 * null
 * { arg1: true }
 */
