import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import AddNewRecords from "./pages/addnewrecord";
import Homepg from "./pages/home";
import BookAppointments from "./pages/bookappointment";
import Viewrecords from "./pages/viewrecords";
import Medicalreport from "./pages/medicalrecord";
import Confirm from "./pages/confirmation";
import Navmain from "./components/navbar";
import OnlineConsultation from "./pages/consultation";
import Specialitypage from "./pages/specialitybooking";
import DoctorConsult from "./pages/doctor/doctorconsultation";
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/onlineconsultation"
              element={
                <ProtectedRoute>
                  <OnlineConsultation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/:specialization"
              element={
                // <ProtectedRoute>
                  <Specialitypage />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/medicalreport"
              element={
                <ProtectedRoute>
                  <Medicalreport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addnewrecords"
              element={
                <ProtectedRoute>
                  <AddNewRecords />
                  </ProtectedRoute>
                  
                
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Homepg />
                  </ProtectedRoute>
                
              }
            />
            <Route
              path="/bookappointment"
              element={
                
                <ProtectedRoute><BookAppointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/viewrecords"
              element={
                <ProtectedRoute><Viewrecords />
                </ProtectedRoute>
                  
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/confirmation"
              element={
                <ProtectedRoute>
                  <Confirm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoute>
                  <Navmain />
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-appointments"
              element={
                <ProtectedRoute>
                  <DoctorAppointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-consultations"
              element={
                <ProtectedRoute>
                  <DoctorConsult />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
