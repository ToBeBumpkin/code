function Promise(executor) {
    const self = this
    this.PromiseState = 'padding'
    this.PromiseResult = ''
    this.callbacks = []
    function resolve(value) {
        if(self.PromiseState !== 'padding') return
        self.PromiseState = 'fulfilled'
        self.PromiseResult = value
        self.callbacks.forEach(item => {
            item.onResolved(self.PromiseResult)
        })
    }
    function reject(reason) {
        if(self.PromiseState !== 'padding') return
        self.PromiseState = 'rejected'
        self.PromiseResult = reason
        self.callbacks.forEach(item => {
            item.onRejected(self.PromiseResult)
        })
    }
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }

}
Promise.prototype.then = function (onResolved, onRejected) {
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult)
    }
    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult)
    }
    if (this.PromiseState === 'padding') {
        this.callbacks.push({ onResolved, onRejected })
    }
}