import { createNumberMask } from 'text-mask-addons'

export const currencyMask = createNumberMask({
	prefix: '',
	suffix: ' ₽',
	thousandsSeparatorSymbol: '.',
})

export const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
export const phoneMask = [
	'(',
	/[1-9]/,
	/\d/,
	/\d/,
	')',
	' ',
	/\d/,
	/\d/,
	/\d/,
	'-',
	/\d/,
	/\d/,
	/\d/,
	/\d/,
]

export const positiveNumber = createNumberMask({
	prefix: '',
	positive: true,
	thousandsSeparatorSymbol: '',
})
