plugins {
    java
    application
    `maven-publish`
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    implementation("org.glassfish.jaxb:jaxb-runtime:4.0.5")
    implementation("org.glassfish.jaxb:jaxb-core:4.0.5")
}

tasks {
    withType<JavaCompile> {
        options.encoding = "UTF-8"
    }
}

description = "common"
java.sourceCompatibility = JavaVersion.VERSION_17

// publishing {
//     publications {
//         create<MavenPublication>("maven") {
//             from(components["java"])
//         }
//     }
// }

tasks.jar {
    manifest.attributes["Main-Class"] = "Main"
    val dependencies = configurations
        .runtimeClasspath
        .get()
        .map(::zipTree) // OR .map { zipTree(it) }
    from(dependencies)
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}
