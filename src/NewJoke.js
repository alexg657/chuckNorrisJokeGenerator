import React from 'react';
import './NewJoke.css';
const newJoke = (props) => {

    return (



        <section class="tc pa3 pa5-ns">
            <header class="tc pv4 pv5-ns">
                <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" class="br3 ba b--black-10 h3 w3" alt="avatar" />
                <h1 class="f5 f4-ns fw6 black-70">Chuck Nurris Joke Generator</h1>
                
            </header>

            <article className="center mw5 mw6-ns hidden ba bw2 mv4">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3">{props.title}</h1>
                <div className="pa3 bt">
                    <p className="f5 f4-ns lh-copy measure mv0 b">
                        {props.content}
                    </p>
                </div>

            </article>

            <button onClick={props.generate} className="f5 link dim br1 ph3 pv2 mb2 dib white bg-black">{props.btn}</button>
        </section>

    )

}

export default newJoke;