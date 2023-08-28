import { PrivateRoute } from './routes/PrivateRoute'
import Restablecer from './paginas/Restablecer'
import { AuthProvider } from './context/AuthProvider'

<BrowserRouter>
    <AuthProvider>
        <Route path='/' element={<Auth />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgot/:id' element={<Forgot />} />
            <Route path='confirmar/:token' element={<Confirmar />} />
            <Route path='recuperar-password/:token' element={<Restablecer />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    </AuthProvider>
</BrowserRouter>