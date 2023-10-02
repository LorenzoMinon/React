export function App (){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                 src="https://unavatar.io/twitter/kikobeats"
                 alt="El avatar de Twitter" />
                <div className="tw-followCard-info">
                    <strong> Lorenzo Miñón</strong>
                    <span>@lorenzo</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}