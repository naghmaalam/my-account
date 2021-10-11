export interface Fields {
  email: string;
  password_email: {
    email: string;
    password: string;
  };
  password: string;
  confirm_password: {
    confirm: string;
    password: string;
  };
  password_old: {
    old: string;
    new: string;
  };
}

export function useValidation() {
  let errors: string[] = [];

  const init = () => {
    // this will reset the errors
    errors = [];
  };

  const checkErrors = (fields: Fields, settings = { init: true }) => {
    if (settings.init) init();

    let errorMessage = "";
    // console.log(fields);

    // email validate
    //eslint-disable-next-line
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
    errorMessage = "error_enter_valid_email";
    errors = errors.filter((v) => v != errorMessage);
    if (
      typeof fields.email !== "undefined" &&
      (!emailReg.test(fields?.email) || fields?.email?.length < 3)
    ) {
      errors.push(errorMessage);
    }

    // email max character 100
    errorMessage = "error_email_max_characters";
    errors = errors.filter((v) => v != errorMessage);
    if (fields?.email?.length > 100) {
      errors.push(errorMessage);
    }

    // password the same with email error
    errorMessage = "error_password_same_with_email";
    errors = errors.filter((v) => v != errorMessage);
    if (
      typeof fields.password_email !== "undefined" &&
      fields.password_email.password === fields.password_email.email
    ) {
      errors.push(errorMessage);
    }

    // password space error
    errorMessage = "error_password_spaces";
    errors = errors.filter((v) => v != errorMessage);
    if (
      typeof fields.password !== "undefined" &&
      fields?.password?.search(" ") >= 0
    ) {
      errors.push(errorMessage);
    }

    // password min length
    errorMessage = "error_password_min_length";
    errors = errors.filter((v) => v != errorMessage);
    if (
      typeof fields.password !== "undefined" &&
      fields?.password?.length < 6
    ) {
      errors.push(errorMessage);
    }

    // password max length
    errorMessage = "error_email_max_characters";
    errors = errors.filter((v) => v != errorMessage);
    if (
      typeof fields.password !== "undefined" &&
      fields?.password?.length > 100
    ) {
      errors.push(errorMessage);
    }

    // confirm password
    errorMessage = "password_doesnt_match";
    errors = errors.filter((v) => v != errorMessage);
    if (
      typeof fields.confirm_password !== "undefined" &&
      fields.confirm_password.confirm != fields.confirm_password.password
    ) {
      errors.push(errorMessage);
    }

    // password equal to old password error
    errorMessage = "error_password_same_with_current";
    errors = errors.filter((v) => v != errorMessage);
    if (
      typeof fields.password_old !== "undefined" &&
      fields.password_old.old == fields.password_old.new
    ) {
      errors.push(errorMessage);
    }
  };

  const hasErrors = () => {
    return errors.length > 0 ? true : false;
  };

  const getError = (index = 0) => {
    return errors[index];
  };

  return {
    // ...toRefs(state),
    errors,
    init,
    checkErrors,
    hasErrors,
    getError,
  };
}
