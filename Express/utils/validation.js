export const createUserSchema = {
	username: {
		isLength: {
			options: {
				min: 3,
				max: 16,
			},
			errorMessage: "Username should be at least 3 and up to 16 characters",
		},
		notEmpty: {
			errorMessage: "Username cannot be empty",
		},
		isString: {
			errorMessage: "Username must be a string",
		},
	},
	displayName: {
		notEmpty: {
			errorMessage: "Username cannot be empty",
		},
		isString: {
			errorMessage: "Username must be a string",
		},
	},
};
