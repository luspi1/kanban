import * as yup from 'yup'

export const taskSchema = yup.object({
	// secondName_RU: yup.string().required('Введите фамилию'),
	// name_RU: yup.string().required('Введите имя'),
	// patronymicName_RU: yup.string().required('Введите отчество'),
	// dataBirth: yup.date().typeError('Введите дату в формате дд.мм.гггг').required('Введите дату'),
	// placeOfBirth_RU: yup.string().required('Введите место рождения'),
	// inn: yup.string().min(10, 'Введите 10 цифр').max(10, 'Введите 10 цифр').required('Введите инн'),
	// seriesAndNumber: yup
	// 	.string()
	// 	.min(10, 'Введите 10 цифр')
	// 	.max(10, 'Введите 10 цифр')
	// 	.required('Введите серию и номер паспорта'),
	// issuedBy_RU: yup.string().required('Введите орган'),
	// dateOfIssue: yup.string().required('Введите дату выдачи'),
	// validity: yup.string().required('Введите дату окончания срока действия'),
	// placeOfPermanentReg_RU: yup.string().required('Введите адрес регистрации'),
	// accountNumber: yup.string().required('Введите номер счета'),
	// bankMFO: yup.string().required('Введите МФО'),
	// bankName_RU: yup.string().required('Введите наименование банка'),
	// checkingAccount: yup.string().required('Введите получателя'),
	// bankDateEnded: yup
	// 	.date()
	// 	.typeError('Введите дату в формате дд.мм.гггг')
	// 	.required('Введите дату окончания срока действия'),
	// bankDateAdded: yup
	// 	.date()
	// 	.typeError('Введите дату в формате дд.мм.гггг')
	// 	.required('Введите дату добавления счета'),
	// scans: yup.string().url('url указан неверно').required('Добавьте ссылку или сканы'),
	// docDescription: yup.string().required('Введите доп. сведения'),
	// mobileNumber: yup.string().required('Введите номер'),
	// email: yup
	// 	.string()
	// 	.email('неправильный формат email')
	// 	.required('Введите' + ' e-mail'),
	// password: yup.string().required('Введите пароль'),
	// passwordRepeat: yup.string().required('Введите пароль повторно'),
})
