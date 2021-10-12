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
                sh 'npm start'
            }
        }
    }
}