type ContactStatusViewProps = {
  status: string | null;
};

function ContactStatusView({ status }: ContactStatusViewProps) {
  if (!status) return null;
  return <div className="mb-3 text-body-secondary">{status}</div>;
}

export default ContactStatusView;
