import { useMutation } from "@blitzjs/core"
import { Form, FormProps, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import createProject from "../mutations/createProject"
import { CreateProjectSchema } from "../validations"
export { FORM_ERROR } from "app/core/components/Form"

type ProjectFormProps = {
  onSuccess?: () => void
}

export const ProjectForm = (props: ProjectFormProps) => {
  const [createProjectMutation] = useMutation(createProject)

  return (
    <Form
      submitText="Create Project"
      schema={CreateProjectSchema}
      initialValues={{ name: "" }}
      onSubmit={async (values) => {
        try {
          await createProjectMutation(values)
          props.onSuccess?.()
        } catch (error) {
          return {
            [FORM_ERROR]: error.toString(),
          }
        }
      }}
    >
      <LabeledTextField name="name" label="Name" placeholder="Project Name..." />
    </Form>
  )
}
