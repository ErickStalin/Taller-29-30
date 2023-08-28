import { useContext } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

const Dashboard = () => {
    const { auth } = useContext(AuthContext);
    const autenticado = localStorage.getItem('token');

    return (
        <div className='md:flex md:min-h-screen'>
            <p className='text-slate-400 text-center my-4 text-sm'>
                <span className='bg-green-600 mx-2 w-3 h-3 inline-block rounded-full'></span>
                Bienvenido - {auth?.nombre}
            </p>

            <div className='bg-gray-800 py-2 flex md:justify-end items-center gap-5 justify-center'>
                <div className='text-md font-semibold text-slate-100'>
                    Bienvenido - {auth?.nombre}
                </div>
            </div>

            <div className='overflow-y-scroll p-8'>
                {autenticado ? <Outlet /> : <Navigate to='/login' />}
            </div>
            
            <div>
                <Link to='/' className=" text-white mr-3 text-md block hover:bg-red-900 text-center
                bg-red-800 px-4 py-1 rounded-lg" onClick={() => { localStorage.removeItem('token') }}>Salir</Link>
            </div>
        </div>
    );
};

export default Dashboard;