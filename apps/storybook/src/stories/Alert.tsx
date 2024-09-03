import { Alert as CoreAlert, AlertDescription, AlertTitle } from "@repo/ui/alert";

const Alert = () => {
  return (
    <CoreAlert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </CoreAlert>);
}

export default Alert;