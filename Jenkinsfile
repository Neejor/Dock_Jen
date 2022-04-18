pipeline {
  agent {
    docker {
     image 'node:16-alpine'
     args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
      stage('Version') {
        steps {
            nodejs(nodeJSInstallationName: "node") {
                sh 'node -v'
            }
        }
    }
    stage('Install Packages') {
      steps {
          nodejs(nodeJSInstallationName: "node"){
        sh 'npm install'}
      }
    }
    stage('Test and Build') {
      parallel {
        
        stage('Create Build Artifacts') {
          steps {
              nodejs(nodeJSInstallationName: "node"){
            sh 'npm run build'}
          }
        }
      }
    }

stage('Production') {
  steps {
    withAWS(region:'ap-south-1',credentials:'Neejor') {
    s3Delete(bucket: 'pipeline-rest-bucket', path:'**/*')
    s3Upload(bucket: 'pipeline-rest-bucket', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
    }
}
