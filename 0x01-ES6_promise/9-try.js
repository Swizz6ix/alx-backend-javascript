export default function guardrail(mathFunction) {
    let queue = [];
    try {
        mathFunction
        .then((result) => {
            queue.push(result)
        })
    }
    catch(error) {
        queue.push(error)
    }
    return queue
}