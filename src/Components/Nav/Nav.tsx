import './Nav.css';
export const Nav = () => {

    const ClickHeader =()=>{
        console.log('Hello Ksenia')
    }

    return (
        <div>
            {/*<img src={'https://cdn-icons-png.flaticon.com/512/1256/1256421.png?w=1060'} />*/}
            <button className="custom-btn btn-12"><span>Смотреть!</span><span>Свежий хлеб</span></button>
           {/* <img src={'https://cdn-icons-png.flaticon.com/512/1249/1249711.png?w=1060'} />*/}
            <button onClick={ClickHeader} className="custom-btn btn-12"><span>Смотреть!</span><span>Торты</span></button>
           {/* <img src={'https://cdn-icons-png.flaticon.com/512/1206/1206663.png?w=1060'} width={'30px'}/>*/}
            <button className="custom-btn btn-12"><span>Смотреть!</span><span>Печенье</span></button>
            {/*<img src={'https://cdn.pixabay.com/photo/2013/07/12/13/15/candy-146690_1280.png'} />*/}
            <button className="custom-btn btn-12"><span>Смотреть!</span><span>Конфеты</span></button>
            {/*<img src={'https://cdn-icons-png.flaticon.com/512/923/923931.png?w=1060'} />*/}
            <button className="custom-btn btn-12"><span>Смотреть!</span><span>Пирожные</span></button>
            {/*<img src={'https://cdn-icons-png.flaticon.com/512/1256/1256952.png?w=1060'} />*/}
            <button className="custom-btn btn-12"><span>Смотреть!</span><span>Мороженое</span></button>
        </div>
    )
}

