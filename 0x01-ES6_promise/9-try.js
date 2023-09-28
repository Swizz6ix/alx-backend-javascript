export default function guardrail(mathFunction) {
    let queue = [];
    try {
        queue.push(mathFunction());
    }
    catch(error) {
        queue.push(`Error: ${e.message}`);
    }
    finally {
        queue.push('Guardrail was processed')
    }
    return queue
}