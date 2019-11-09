package Main;

import Components.Component;
import Protocol.Initializer.Initializer;
import Protocol.Sending.SenderAdmin;
import Protocol.Sending.XbeeSender;
import SensorReading.SensorsReader;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MainSender {

    public static void main(String ... args) throws Exception{
        /*--------------------- Constantes ---------------------*/

        char baseHeader = 'A';
        int msgLimitSize = 8 + 16 + 8; // 8 bit header, 16 bit contenido, 8 bit CRC8
        int BAUD_RATE = 9600;
        String PORT_SENDER = "COM4";
        String REMOTE_IDENTIFIER = "EOLIAN FENIX";

        /*------------------- Clases de envío -------------------*/

        XbeeSender xbeeSender = new XbeeSender(BAUD_RATE, PORT_SENDER, REMOTE_IDENTIFIER);
        SenderAdmin senderAdmin = new SenderAdmin(xbeeSender);

        /*--------------------- Componentes ---------------------*/

        // 2 4 8 16 32 64 128 256 512 1024 2048
        // 1 2 3 4  5  6  7   8   9   10   11
        int[] valores = {200, 189, 0, 111, 30};
        int[] bitSig = {8, 8, 2, 8, 5};
        Component BMS_origen = new Component(senderAdmin, valores, bitSig, "BMS_ORIGEN");

        HashMap<String, Component> allComponents = new HashMap<>();
        allComponents.put(BMS_origen.getID(), BMS_origen);

        LinkedList<Component> listAllComponents_origen = new LinkedList<>();
        listAllComponents_origen.add(BMS_origen);

        /*--------------------- Inicializador ---------------------*/

        Initializer initializer_origen = new Initializer(listAllComponents_origen, msgLimitSize, baseHeader);
        initializer_origen.genMessages(); // Para enviar no se necesita HashMap de Messages

        System.out.println("Initializaer origen: ");
        System.out.println(BMS_origen.printMessagesWithIndexes());


        /*------------------ Generador de datos ------------------*/

        SensorsReader sensorsReader = new SensorsReader(allComponents, listAllComponents_origen);

        /*---------------- Threads de cada clase -----------------*/

        ExecutorService xbeeSenderExecutor = Executors.newFixedThreadPool(1);
        ExecutorService senderAdminExecutor = Executors.newFixedThreadPool(1);
        ExecutorService sensorsReaderExecutor = Executors.newFixedThreadPool(1);

        xbeeSenderExecutor.submit(xbeeSender);
        senderAdminExecutor.submit(senderAdmin);
        sensorsReaderExecutor.submit(sensorsReader);


        // Al finalizar, finalizar también los executors
        xbeeSenderExecutor.shutdown();
        senderAdminExecutor.shutdown();
        sensorsReaderExecutor.shutdown();
    }


}