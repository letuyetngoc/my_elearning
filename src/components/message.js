import Swal from 'sweetalert2'
import { toast } from 'react-toastify';

export const successMessage = (text) => {
    return toast.success(text, {
        autoClose: 2000,
        theme: 'colored'
    })
}
export const errorMessage = (text) => {
    return toast.error(text, {
        autoClose: 2000,
        theme: 'colored'
    })
}
export const confirmMessage = (title, callback) => {
    return Swal.fire({
        title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0071dc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            callback()
        }
    })
}