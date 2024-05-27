plugins {
    java
    application
    `maven-publish`
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies{
    implementation(project(":common"))
    implementation("org.apache.logging.log4j:log4j-core:2.17.1")
    implementation("org.apache.logging.log4j:log4j-api:2.17.1")
    implementation("org.postgresql:postgresql:42.7.3")

}

tasks {
    withType<JavaCompile> {
        options.encoding = "UTF-8"
    }
}

description = "server"
java.sourceCompatibility = JavaVersion.VERSION_17

publishing {
    publications {
        create<MavenPublication>("maven") {
            from(components["java"])
        }
    }
}

tasks.jar {
    manifest.attributes["Main-Class"] = "Main"
    val dependencies = configurations
        .runtimeClasspath
        .get()
        .map(::zipTree) // OR .map { zipTree(it) }
    from(dependencies)
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}
