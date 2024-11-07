import classes from './CssModules.module.scss';

export const CssModules =  () => {
    return (
        // JavaScriptのclassは予約語（オブジェクト指向のclass）なので、classNameで代替
        <div className={classes.container}>
            <p className={classes.tittle}>CSS Modulesです</p>
            <button className={classes.button}>ボタン</button>
        </div>
    )
}