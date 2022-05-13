import React from "react";
import { Button } from "react-bootstrap";
import { FieldValues, useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { signInClient } from "./clientSlice";

const Login = () => {

  const dispatch = useAppDispatch();
  const {client}= useAppSelector((state)=> state.client);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({ mode: "all" });

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInClient(data));
    } catch (error: any) {
      console.log(error);
    }
  }

  
  return (
    <div className="tab-content content-modal-box">
      {client && (<Navigate to="/catalog" replace={true}/>) }
      <form
        action="#"
        className="account-form-box"
        onSubmit={handleSubmit(submitForm)}
      >
        <h6>Login your account</h6>
        <div className="single-input">
          <input
            type="text"
            placeholder="AccountName"
            {...register("accountName", {
              required: "Veuillez entrer un nom d'utilisateur",
            })}
          />
          {errors?.accountName?.message && (
            <span>{errors?.accountName?.message}</span>
          )}
        </div>
        <div className="single-input">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Veuillez entrer un mot de passe",
            })}
          />
          {errors?.password?.message && (
            <span>{errors?.password?.message}</span>
          )}
        </div>
        <div className="checkbox-wrap mt-10">
          <label className="label-for-checkbox inline mt-15">
            <input
              className="input-checkbox"
              name="rememberme"
              type="checkbox"
              id="rememberme"
              value="forever"
            />{" "}
            <span>Remember me</span>
          </label>
          <Link to="" className=" mt-10">
            Lost your password?
          </Link>
        </div>
        <div className="button-box mt-25">
          <Button
            className="btn btn--full btn--black"
            type="submit"
            disabled={isSubmitting || !isValid}
          >
            {!isSubmitting && <span> Log in </span>}
            {isSubmitting && (
              <span className="indicator-progress" style={{ display: "block" }}>
                chargement...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
