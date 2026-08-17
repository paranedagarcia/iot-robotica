---
id: sensor-hcsr04
title:  "Sensor Ultrasónico"
sidebar_label: "📚 Sensor HC-SR04"
---

El **HC-SR04** es un sensor de distancia por ultrasonidos económico y muy popular en robótica. Su rango de detección óptimo va desde los **2 cm hasta los 4 m** (o 400 cm), y trabaja con un voltaje de **5 V**. 

Para probar un sensor de ultrasonidos **HC-SR04** en **Arduino Uno**, es necesario comprender cómo funciona este dispositivo, cómo se conecta utilizando las directrices generales de las placas de expansión (*shields*) y cómo estructurar el código en **C++** de forma clara y rigurosa.

---

### 1. ¿Cómo funciona el sensor HC-SR04?

El **HC-SR04** mide distancias enviando ráfagas de ondas de sonido de alta frecuencia (ultrasonido) que son inaudibles para el oído humano. 

El sensor consta de cuatro pines fundamentales:
*   **VCC**: Pin de alimentación positiva (5 V).
*   **GND**: Pin de tierra (común o 0 V).
*   **Trig (Trigger)**: Pin de entrada del sensor. 
*   **Echo**: Pin de salida del sensor.

El funcionamiento se resume en los siguientes pasos:
1. El pin **Trig (Trigger)** recibe un pulso eléctrico de disparo enviado por el Arduino. Al recibir un pulso eléctrico, el emisor genera ráfagas de ondas de ultrasonidos inaudibles (a 40 kHz).
2. Al activarse, el sensor emite un patrón de ondas sonoras hacia el frente.
3. Si estas ondas chocan con un obstáculo, rebotan y regresan hacia el sensor.
4. El receptor del sensor detecta el eco de retorno y activa el pin **Echo**, generando un pulso eléctrico cuya duración en microsegundos es proporcional al tiempo que tardó el sonido en hacer el viaje de ida y vuelta. 


---

### 2. Conexión en el Sensor Shield

El **Sensor Shield v5.0** es una placa de expansión que facilita enormemente el conexionado de sensores y actuadores. En lugar de usar una placa de pruebas (*protoboard*) externa, el shield expande cada pin de Arduino en un bloque de tres pines macho alineados que siguen el estándar **G V S**:
*   **G** (Ground / Tierra o **-**): Conectado al pin **GND** de Arduino.
*   **V** (VCC / Voltaje o **+**): Suministra alimentación de **+5V**.
*   **S** (Signal / Señal): Línea de señal (*Signal*) conectada directamente al pin digital de la placa.


Para conectar el sensor **HC-SR04** al **Sensor Shield**, utiliza cables puente hembra-hembra (*Dupont*) de la siguiente manera:
1.  Conecta el pin **VCC** del sensor a la fila **V** (o +) en cualquiera de los bloques digitales del shield.
2.  Conecta el pin **GND** del sensor a la fila **G** (o -) del shield.
3.  Conecta el pin **Trig** del sensor a la fila de señal (**S**) del pin digital que elijas; por ejemplo, el **Pin 10**.
4.  Conecta el pin **Echo** del sensor a la fila de señal (**S**) de otro pin digital; por ejemplo, el **Pin 9**.

---

### 3. Código de Programación en C++ (Arduino Uno)
Este código realiza la inicialización del puerto serie para mostrar los resultados en la computadora, genera la señal de disparo en el pin **Trig**, mide la respuesta en el pin **Echo** y calcula la distancia final en centímetros.
<br/>
<Tabs>
<TabItem value="db" label="Sensor" default>
<div class="alert alert--primary">

**Código de Programación en C++ (Arduino Uno)**

Este código realiza la inicialización del puerto serie para mostrar los resultados en la computadora, genera la señal de disparo en el pin **Trig**, mide la respuesta en el pin **Echo** y calcula la distancia final en centímetros.

**Interpretación de los Resultados**

Una vez cargado el código en tu **Arduino Uno**, abre el **Monitor Serie** del entorno de desarrollo (asegúrate de configurarlo a la misma velocidad definida en el programa, es decir, **9600 baudios**). Verás pasar una lista constante con la distancia en centímetros. Si colocas tu mano o un objeto plano frente al sensor y lo acercas o lo alejas, notarás que los valores numéricos cambian en tiempo real de acuerdo con el desplazamiento del objeto.

Para probar un sensor de ultrasonidos **HC-SR04** montado sobre un **Sensor Shield v5.0** con un **Arduino Uno**, es necesario comprender la distribución de las conexiones de la placa de expansión, el funcionamiento físico del sensor y cómo estructurar un programa básico en **C++**.

**Explicación Científica del Cálculo**

La fórmula de conversión se basa en la física acústica:
*   La velocidad del sonido es de **340 m/s**. Esto se puede expresar como **29 microsegundos por cada centímetro** de recorrido.
*   Como la señal sonora viaja del sensor al obstáculo (ida) y del obstáculo al sensor (vuelta), la distancia física real es exactamente la mitad del trayecto total de la onda de sonido.
*   Por lo tanto, la distancia en centímetros se calcula dividiendo la duración del pulso de eco entre **29** (para obtener centímetros totales recorridos) y luego dividiendo el resultado entre **2** (para obtener la distancia al objeto).

**Cómo ver los resultados en la computadora**

Una vez que hayas cargado (*subido*) el programa en tu Arduino Uno:
1. Ve al menú superior del software de Arduino y selecciona **Herramientas > Monitor Serie** (o presiona el icono de la lupa en la esquina superior derecha).
2. Asegúrate de que la velocidad de comunicación del monitor esté configurada a **9600 baudios** (para coincidir con el valor definido en el código).
3. Verás una lista continua de líneas que imprimen el tiempo de eco medido y la distancia calculada en centímetros. Coloca tu mano o una superficie plana (como un cuaderno) delante del sensor y muévela para ver cómo cambian los valores en tiempo real.
</div>
</TabItem>
<TabItem value="db-python" label="C++">

```cpp showLineNumbers title="Prueba de sensor de ultrasonidos"
// ====================================================================
// PROGRAMA: Prueba de Sensor de Ultrasonidos HC-SR04
// Descripción: Mide la distancia en centímetros y la muestra
//              en el Monitor Serie de la computadora.
// ====================================================================

// Definición de constantes para los pines de conexión
const int echoPin = 12;   // Pin digital conectado a Echo
const int trigPin = 13;  // Pin digital conectado a Trig

// Variables globales para el cálculo de distancia
long duracion;           // Almacena el tiempo del pulso en microsegundos
long distanciaCm;        // Almacena la distancia calculada en centímetros

void setup() {
  // Inicializamos la comunicación por el puerto serie a 9600 bps
  Serial.begin(9600); 
  
  // Configuración de los pines de Arduino
  pinMode(trigPin, OUTPUT); // El pin de Trigger envía el pulso (Salida)
  pinMode(echoPin, INPUT);   // El pin de Echo recibe el pulso (Entrada)
  
  Serial.println("--- PRUEBA DE SENSOR HC-SR04 INICIADA ---");
  Serial.println("Coloque un objeto frente al sensor para medir...");
}

void loop() {
  // 1. Aseguramos que el pin Trigger esté apagado al inicio
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2); // Pausa microsegundos para estabilidad
  
  // 2. Enviamos un pulso alto (HIGH) de exactamente 10 microsegundos
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10); // Tiempo requerido para activar el sensor
  digitalWrite(trigPin, LOW);
  
  // 3. Medimos el tiempo que el pin Echo permanece en HIGH
  // La función pulseIn() devuelve la duración del pulso entrante en microsegundos
  duracion = pulseIn(echoPin, HIGH);
  
  // 4. Convertimos el tiempo obtenido a distancia en centímetros
  distanciaCm = calcularCentimetros(duracion);
  
  // 5. Enviamos la información de la lectura al Monitor Serie
  Serial.print("Distancia calculada: ");
  Serial.print(distanciaCm);
  Serial.println(" cm");
  
  // 6. Esperamos un breve intervalo antes de la siguiente medición
  // Es recomendable dar una pausa (mínimo de 60 ms) para evitar interferencias
  // entre rebotes de ondas de ultrasonidos consecutivas.
  delay(200); 
}

// Función auxiliar para convertir microsegundos a centímetros
long calcularCentimetros(long microsegundos) {
  // La velocidad del sonido en el aire es de 340 m/s, lo que equivale a decir
  // que tarda unos 29 microsegundos en recorrer 1 centímetro.
  // Dado que el ultrasonido viaja de ida y vuelta, el recorrido total es el doble.
  // Por lo tanto, dividimos los microsegundos entre 29 y luego entre 2.
  return microsegundos / 29 / 2;
}
```
</TabItem>
</Tabs><br />



