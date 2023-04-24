export const debounce = (callback=() => null, delay=200) => {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => callback.apply(context, args), delay);
    }
};