'use strict';

class HistoryTracker {
    constructor() {
        this.historyDataUrl = [];

        window.addEventListener('popstate', (event) => {
            console.log(event.state);
        })
    }

    push(url) {
        window.history.pushState(
            {url: url},
            '',
            url
        )
        this.historyDataUrl.push(window.location.href);
    }

    back() {
        window.history.back();
    }

    getDataHistoryUrl() {
        return this.historyDataUrl;
    }
}

const track = new HistoryTracker();

track.push('/catalog');
track.push('/about');
track.push('/contact');

track.back();

console.log(track.getDataHistoryUrl());