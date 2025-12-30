type SubmitFormViewProps = {
  submitDisabled: boolean;
  isSubmitting: boolean;
};

function SubmitFormView({ submitDisabled, isSubmitting }: SubmitFormViewProps) {
  return (
    <div className="col-12">
      <button type="submit" className="btn btn-primary" disabled={submitDisabled}>
        {isSubmitting ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            />
            Enviando...
          </>
        ) : (
          "Enviar solicitud"
        )}
      </button>
    </div>
  );
}

export default SubmitFormView;
