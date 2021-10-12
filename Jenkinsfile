pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 4100:4100'
        }
    }
    environment { 
        CI = 'true'
    }
    stages{
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh 'deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'kill.sh'
            }
        }
    }
}