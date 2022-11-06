import { useCallback } from "react"
import { toast } from "react-toastify"

export const useToast = () => {
  const notInstallMetaMask = useCallback(() => {
    toast.error("MetaMaskをインストールしてください!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }, [])
  const invalidArgument = useCallback(() => {
    toast.error("無効なパラメータです", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }, [])
  const custom = useCallback((message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }, [])

  return {
    notInstallMetaMask,
    invalidArgument,
    custom,
  }
}
