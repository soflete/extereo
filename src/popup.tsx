import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Observable } from 'rxjs';
import Message from './model/Message';
import PopUp from './components/PopUp';

const message$ = Observable.fromEventPattern((h: (message: Message) => void) => {
    chrome.runtime.onMessage.addListener(h)
}, (h: (message: Message) => void) => {
    chrome.runtime.onMessage.removeListener(h)
}, (message: Message) => message)

ReactDOM.render(
    <PopUp message$={message$} />,
    document.getElementById('root')
)