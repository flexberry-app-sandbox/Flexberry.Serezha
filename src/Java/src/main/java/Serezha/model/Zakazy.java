package Serezha.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказы
 */
@Entity(name = "IISSerezhaЗаказы")
@Table(schema = "public", name = "Заказы")
public class Zakazy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодЗаказа")
    private Integer кодзаказа;

    @Column(name = "ДатаИВремя")
    private String датаивремя;

    @Column(name = "ТипОплаты")
    private String типоплаты;

    @Column(name = "ТипВручения")
    private String типвручения;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomera")
    @Convert("Nomera")
    @Column(name = "Номера", length = 16, unique = true, nullable = false)
    private UUID _nomeraid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomera", insertable = false, updatable = false)
    private Nomera nomera;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;

    @OneToMany(mappedBy = "zakazy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavZakaza> sostavzakazas;


    public Zakazy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодЗаказа() {
      return кодзаказа;
    }

    public void setКодЗаказа(Integer кодзаказа) {
      this.кодзаказа = кодзаказа;
    }

    public String getДатаИВремя() {
      return датаивремя;
    }

    public void setДатаИВремя(String датаивремя) {
      this.датаивремя = датаивремя;
    }

    public String getТипОплаты() {
      return типоплаты;
    }

    public void setТипОплаты(String типоплаты) {
      this.типоплаты = типоплаты;
    }

    public String getТипВручения() {
      return типвручения;
    }

    public void setТипВручения(String типвручения) {
      this.типвручения = типвручения;
    }


}