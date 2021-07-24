import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createProject, { CreateProjectSchema } from "app/projects/mutations/createProject"
import { ProjectForm, FORM_ERROR } from "app/projects/components/ProjectForm"

const NewProjectPage: BlitzPage = () => {
  const router = useRouter()
  const [createProjectMutation] = useMutation(createProject)

  return (
    <div>
      <h1>Create New Project</h1>

      <ProjectForm onSuccess={() => router.push(Routes.Home())} />

      <p>
        <Link href={Routes.ProjectsPage()}>
          <a>Projects</a>
        </Link>
      </p>
    </div>
  )
}

// NewProjectPage.authenticate = true
NewProjectPage.getLayout = (page) => <Layout title={"Create New Project"}>{page}</Layout>

export default NewProjectPage
