pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'yarn'
                sh 'yarn run dist'
            }
        }
    }
}