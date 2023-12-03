pipeline {
    agent any

    environment {
        // Define environment variables if needed
        NODE_HOME = tool 'NodeJS'
        PATH = "${NODE_HOME}/bin:${PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system (e.g., Git)
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                script {
                    sh 'npm run build'
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
