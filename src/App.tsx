import styles from "./components/Site.module.css";
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from './components/pages/_styles'
import { Link } from "react-router-dom";


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PRICES: '/prices',
   
} as const

function App() {
    const navigate = useNavigate()
const navigateHandler = () => navigate(-1)


    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={"/protected-page"}>Защищенная страница</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    {/*  для отображения children из роутингаб т.к. App-это корень */}
                    <div>
                        <Link to={'/adidas'} onClick={navigateHandler}>Главная</Link>
                        <button onClick={navigateHandler}>Назад</button>
                    </div>
                    <Outlet/>

                    {/* <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PRICES} element={<Prices/>}/>
                        <Route path={'/adidas/:id'} element={<Model/>}/>
                        <Route path={'/:model/:id'} element={<Model/>}/>
                        <Route path={'/*'} element={<Error404/>}/>

                        <Route path={'/page/error'} element={<Error404/>}/>
                        <Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>
                    </Routes>  */}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



