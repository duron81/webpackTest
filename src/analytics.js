function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;

    const lisntener = () => counter++;

    document.addEventListener('click', lisntener);

    return {
        destroy() {
            document.removeEventListener('click', lisntener);
            isDestroyed = true;
        },

        getClicks() {
            if (isDestroyed) {
                return 'Analytics is destroyed';
            }
            return counter;
        }
    };
}

window.analytics = createAnalytics();