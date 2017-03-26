/* @jsx execute */

const execute = (fun, props, children) => {
  fun()
}

const SayHello = () => { console.log("Hello!") }

const getContent = () => {
  return <SayHello arg1={true} />
}

getContent()

/**
 * OUTPUT:
 *
 * Hello!
 * { arg1: true }
 */