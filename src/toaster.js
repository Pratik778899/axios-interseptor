import { toast } from "react-toastify";

const toastConfig = {
    autoClose: 2000,
    pauseOnHover: false,
    theme: "colored",
    hideProgressBar: false,
    position: "top-right",
}

const toaster = {}

toaster.info = (message , config = toastConfig) => {
    toast.info(message, config);
}

toaster.success = (message) => {
    toast.success(message, toastConfig);
}

toaster.warning = (message) => {
    toast.warning(message, toastConfig);
}

toaster.error = (message) => {
    toast.error(message, toastConfig);
}

export { toaster }