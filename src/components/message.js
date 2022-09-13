import swal from 'sweetalert'
export const successMessage = (text) => {
    return swal({
        // title: "Good job!",
        text,
        icon: "success",
    });
}
export const errorMessage = (text) => {
    return swal({
        // title: "Good job!",
        text,
        icon: "error",
    });
}