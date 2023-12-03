pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system (e.g., Git)
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build the React app
                script {
                    // Use Node.js and npm from the environment or specify the paths
                    def npmCommand = 'npm'
                    def nodeCommand = 'node'

                    // Install dependencies
                    sh "${npmCommand} install"

                    // Build the React app
                    sh "${npmCommand} run build"
                }
            }
        }

        stage('Deploy') {
            steps {
                // Your deployment steps go here
                script {
                    // Example: Copy the build artifacts to a deployment directory
                    def buildDir = 'build'
                    def deploymentDir = '/path/to/your/deployment/directory'

                    sh "rm -rf ${deploymentDir}/*"
                    sh "cp -r ${buildDir}/* ${deploymentDir}/"

                    // Additional deployment steps if needed
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful. Trigger further actions if needed.'
        }
        failure {
            echo 'Deployment failed. Notify stakeholders or take corrective actions.'
        }
    }
}
