import { useLocation, useNavigate } from 'react-router-dom'

export const useRemoveParam = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const removeParam = (name: string) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.delete(name)
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    })
  }
  return removeParam
}
