/**
 * Convert numbers to USD currency format
 * @param value
 * @returns
 */

type Options = {
  showDecimals?: boolean
}

const defaultOptions = {
  showDecimals: true,
}

const formatCurrency = (value: number | string, options?: Options) => {
  const { showDecimals } = {
    ...defaultOptions,
    ...options,
  }

  const _value = typeof value === 'string' ? Number(value) : value
  if (isNaN(_value) || _value === 0) return 0

  let minimumFractionDigits = 0
  let maximumFractionDigits = showDecimals ? 2 : 0

  const decimals = String(_value).split('.')[1]

  if (decimals && decimals.length < 2 && showDecimals) {
    minimumFractionDigits = 2
  }

  return _value.toLocaleString('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  })
}

export default formatCurrency
