
function worker () {
    self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
        if (!e) return;
        let seconds = e.data;
            seconds++;
            postMessage(seconds);
    })
}

export default worker;